function Carousel(containerID = '#carousel', slide = '.slide', ) {
    this.container = document.querySelector(containerID);
    this.slides = this.container.querySelectorAll(slide);
}


Carousel.prototype = {

    _initProps() {
        this.slidesCount = this.slides.length
        this.currentSlide = 0;
    },

    _initControls() {},

    _initIndicators() { 
        const indicators = document.querySelector('.indicators');
        const indicator = document.querySelectorAll('.indicator');    
        this.container.appendChild(indicators)
        this.indContainer = this.container.querySelector('.indicators');
        this.indItem = this.container.querySelectorAll('.indicator');
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
        if (target && target.classList.contains('indicator')) {
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

Carousel()