<template>
    <div class="preview-bar bg-white fixed-top py-2 border-bottom-primary">
      <div class="container-fluid h-100">
        <div class="row align-items-center justify-content-between h-100">
          <div class="col-auto col-lg">
            <a class="btn btn-transparent-dark btn-sm" href="/template/modern-business">
              <i class="fas fa-arrow-left me-1"></i>
              <span>Overview Page</span>
            </a>
          </div>
          <div class="col col-auto d-none d-xl-block">
            <div class="responsive-toggler justify-content-center">
              <button id="desktopToggle" placement="bottom" class="btn btn-icon btn-transparent-dark mx-1 active">
                <i class="fas fa-desktop"></i>
              </button>
              <button id="tabletToggle" placement="bottom" class="btn btn-icon btn-transparent-dark mx-1">
                <i class="fas fa-tablet"></i>
              </button>
              <button id="mobileToggle" placement="bottom" class="btn btn-icon btn-transparent-dark mx-1">
                <i class="fas fa-mobile"></i>
              </button>
            </div>
          </div>
          <div class="col text-end">
            <a class="btn btn-transparent-dark btn-sm me-2" href="https://github.com/StartBootstrap/startbootstrap-modern-business">
              <i class="fab fa-github text-github"></i>
            </a>
            <a class="btn btn-primary-soft text-primary btn-sm d-none d-sm-inline-block me-2" href="https://github.com/StartBootstrap/startbootstrap-modern-business/archive/gh-pages.zip">
              <i class="fas fa-download me-1"></i>
              Free Download
            </a>
            <button class="btn btn-transparent-dark btn-sm btn-icon">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'previewOne'
  }
  </script>
  
  <style scoped>
  
  .preview-bar {
    z-index: 1030; 
  }
  
  .text-github {
    color: #333;
  }
  
  .btn-primary-soft {
    background-color: rgba(0, 123, 255, 0.1);
    border-color: rgba(0, 123, 255, 0.1);
  }
  
  .btn-primary-soft:hover {
    background-color: rgba(0, 123, 255, 0.2);
    border-color: rgba(0, 123, 255, 0.2);
  }
  </style>