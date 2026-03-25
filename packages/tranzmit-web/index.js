const WIDGET_SCRIPT_ID = 'tranzmit-widget-sdk';
const REPLAY_SCRIPT_ID = 'tranzmit-replay-sdk';
const RRWEB_SCRIPT_ID = 'tranzmit-rrweb-sdk';

function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function normalizeEndpoint(endpoint) {
  if (!endpoint || typeof endpoint !== 'string') {
    throw new Error('Tranzmit endpoint is required.');
  }

  return endpoint.replace(/\/$/, '');
}

function assertRequired(name, value) {
  if (!value) {
    throw new Error(`Tranzmit ${name} is required.`);
  }
}

function loadScript({ id, src, attributes }) {
  if (!isBrowser()) {
    return Promise.resolve(null);
  }

  const existing = document.getElementById(id);
  if (existing) {
    return Promise.resolve(existing);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = true;

    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        if (value != null) {
          script.setAttribute(key, String(value));
        }
      });
    }

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load ${src}`));

    document.head.appendChild(script);
  });
}

function installTranzmitWidget(config) {
  assertRequired('apiKey', config && config.apiKey);
  assertRequired('endpoint', config && config.endpoint);
  assertRequired('distinctId', config && config.distinctId);

  if (!isBrowser()) {
    return Promise.resolve(null);
  }

  const endpoint = normalizeEndpoint(config.endpoint);

  window.TRANZMIT_WIDGET_CONFIG = {
    ...(window.TRANZMIT_WIDGET_CONFIG || {}),
    ...config,
    endpoint,
  };

  return loadScript({
    id: WIDGET_SCRIPT_ID,
    src: config.widgetScriptUrl || config.scriptUrl || `${endpoint}/tranzmit-widget.js`,
  });
}

async function installTranzmitCancelFlow(config) {
  const installWidget = config.widget !== false;
  const installReplay = config.replay !== false;

  const results = { widget: null, replay: null };

  if (installWidget) {
    results.widget = await installTranzmitWidget(config);
  }

  if (installReplay) {
    results.replay = await installTranzmitReplay(config);
  }

  return results;
}

function updateTranzmitWidgetConfig(partialConfig) {
  if (!isBrowser()) {
    return null;
  }

  const normalizedConfig = {
    ...partialConfig,
    ...(partialConfig && partialConfig.endpoint
      ? { endpoint: normalizeEndpoint(partialConfig.endpoint) }
      : {}),
  };

  window.TRANZMIT_WIDGET_CONFIG = {
    ...(window.TRANZMIT_WIDGET_CONFIG || {}),
    ...normalizedConfig,
  };

  return window.TRANZMIT_WIDGET_CONFIG;
}

function removeTranzmitWidget(options) {
  if (!isBrowser()) {
    return;
  }

  if (typeof window.TRANZMIT_WIDGET_STOP === 'function') {
    window.TRANZMIT_WIDGET_STOP();
  }

  const script = document.getElementById(WIDGET_SCRIPT_ID);
  if (script && script.parentNode) {
    script.parentNode.removeChild(script);
  }

  if (!options || options.preserveConfig !== true) {
    delete window.TRANZMIT_WIDGET_CONFIG;
  }
}

async function installTranzmitReplay(config) {
  assertRequired('apiKey', config && config.apiKey);
  assertRequired('endpoint', config && config.endpoint);

  if (!isBrowser()) {
    return null;
  }

  const endpoint = normalizeEndpoint(config.endpoint);

  window.TRANZMIT_CONFIG = {
    ...(window.TRANZMIT_CONFIG || {}),
    ...config,
    endpoint,
  };

  await loadScript({
    id: RRWEB_SCRIPT_ID,
    src: config.rrwebUrl || 'https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb-all.min.js',
  });

  return loadScript({
    id: REPLAY_SCRIPT_ID,
    src: config.replayScriptUrl || config.scriptUrl || `${endpoint}/tranzmit-replay.js`,
  });
}

function updateTranzmitReplayConfig(partialConfig) {
  if (!isBrowser()) {
    return null;
  }

  const normalizedConfig = {
    ...partialConfig,
    ...(partialConfig && partialConfig.endpoint
      ? { endpoint: normalizeEndpoint(partialConfig.endpoint) }
      : {}),
  };

  window.TRANZMIT_CONFIG = {
    ...(window.TRANZMIT_CONFIG || {}),
    ...normalizedConfig,
  };

  return window.TRANZMIT_CONFIG;
}

function removeTranzmitReplay(options) {
  if (!isBrowser()) {
    return;
  }

  [REPLAY_SCRIPT_ID, RRWEB_SCRIPT_ID].forEach((id) => {
    const script = document.getElementById(id);
    if (script && script.parentNode) {
      script.parentNode.removeChild(script);
    }
  });

  if (!options || options.preserveConfig !== true) {
    delete window.TRANZMIT_CONFIG;
  }
}

module.exports = {
  installTranzmitWidget,
  installTranzmitCancelFlow,
  updateTranzmitWidgetConfig,
  removeTranzmitWidget,
  installTranzmitReplay,
  updateTranzmitReplayConfig,
  removeTranzmitReplay,
  normalizeEndpoint,
};
