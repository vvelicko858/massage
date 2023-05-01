
function Carouselqq(containerID = '#carouselqq', slide = '.slideqq' ) {
    this.container = document.querySelector(containerID);
    this.slides = this.container.querySelectorAll(slide);
}


Carouselqq.prototype = {

    _initProps() {
        this.slidesCount = this.slides.length
        this.currentSlide = 0;
    },

    _initControls() {},

    _initIndicators() { 
        const indicators = document.querySelector('.indicatorsqq');
        const indicator = document.querySelectorAll('.indicatorqq');    
        this.container.appendChild(indicators)
        this.indContainer = this.container.querySelector('.indicatorsqq');
        this.indItem = this.container.querySelectorAll('.indicatorqq');
    },



    _initLiseners() {
        this.indContainer.addEventListener('click', this.indicate.bind(this))
    },


    gotoSlide(n) {
        this.slides[this.currentSlide].classList.toggle('active');
        this.indItem[this.currentSlide].classList.toggle('active');
        this.currentSlide = (n + this.slidesCount) % this.slidesCount
        this.slides[this.currentSlide].classList.toggle('active');
        this.indItem[this.currentSlide].classList.toggle('active');
    },

    pause() {},

    indicate(e) {
        let target = e.target
        if (target && target.classList.contains('indicatorqq')) {
            this.pause()
            this.gotoSlide(+target.dataset.slideTo)
        }
    },

    init() {
        this._initProps()
        this._initIndicators()
        this._initLiseners()
    }
};

Carouselqq()