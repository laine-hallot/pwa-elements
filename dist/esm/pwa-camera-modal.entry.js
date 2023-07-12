import { r as registerInstance, c as createEvent, h } from './index-1c5c47b4.js';

const cameraModalCss = ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}";

const PWACameraModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onPhoto = createEvent(this, "onPhoto", 7);
    this.noDeviceError = createEvent(this, "noDeviceError", 7);
    this.facingMode = 'user';
  }
  async present() {
    const camera = document.createElement('pwa-camera-modal-instance');
    camera.facingMode = this.facingMode;
    camera.addEventListener('onPhoto', async (e) => {
      if (!this._modal) {
        return;
      }
      const photo = e.detail;
      this.onPhoto.emit(photo);
    });
    camera.addEventListener('noDeviceError', async (e) => {
      this.noDeviceError.emit(e);
    });
    document.body.append(camera);
    this._modal = camera;
  }
  async dismiss() {
    if (!this._modal) {
      return;
    }
    this._modal && this._modal.parentNode.removeChild(this._modal);
    this._modal = null;
  }
  render() {
    return (h("div", null));
  }
};
PWACameraModal.style = cameraModalCss;

export { PWACameraModal as pwa_camera_modal };

//# sourceMappingURL=pwa-camera-modal.entry.js.map