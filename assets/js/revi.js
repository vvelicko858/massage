function Carouselre(containerID = '#revi-carousel', slide = '.revi-slide', interval = 10000) {
    this.container = document.querySelector(containerID);
    this.slides = this.container.querySelectorAll(slide);

    this.interval = interval;


}


Carouselre.prototype = {

    _initProps() {
        this.slidesCount = this.slides.length


        this.currentSlide = 0;
        this.isPLaying = true;

        this.SPACE = ' ';
        this.LEFT_ARROW = 'ArrowLeft';
        this.RIGHT_ARROW = 'ArrowRight';
        this.FA_PREV = '<i class="fas fa-angle-left"></i>'
        this.FA_NEXT = '<i class="fas fa-angle-right"></i>'
    },

    _initControls() {
        const controls = document.createElement('div');
        const prev = `<span id="prev-btn" class="control control-prev">${this.FA_PREV}</span>`
        const next = `<div class="next"><span id="next-btn" class="control control-next">${this.FA_NEXT}</i></span></div>`


        controls.setAttribute('class', 'controls')
        controls.innerHTML =  prev + next

        this.container.appendChild(controls)


        this.prevBtn = this.container.querySelector('#prev-btn');
        this.nextBtn = this.container.querySelector('#next-btn');

    },

    _initIndicators() {
        const indicators = document.createElement('ol');
        indicators.setAttribute('class', 'revi-indicators')

        for (let i = 0, n = this.slidesCount; i < n; i++) {
            const indicator = document.createElement('li');

            
            indicator.setAttribute('class', 'revi-indicator')
            indicator.dataset.slideTo= `${i}`
            i ===0 && indicator.classList.add('active')
            indicators.appendChild(indicator)
        }

        this.container.appendChild(indicators)


        this.indContainer = this.container.querySelector('.revi-indicators');
        this.indItem = this.container.querySelectorAll('.revi-indicator');
    },

    _initLiseners() {
        document.addEventListener('keydown', this.pressKey.bind(this))
        this.indContainer.addEventListener('click', this.indicate.bind(this))
        this.nextBtn.addEventListener('click', this.next.bind(this));
        this.prevBtn.addEventListener('click', this.prev.bind(this));
    },


    gotoSlide(n) {
        this.slides[this.currentSlide].classList.toggle('active');
        this.indItem[this.currentSlide].classList.toggle('active');       
        this.currentSlide = (n + this.slidesCount) % this.slidesCount
        this.slides[this.currentSlide].classList.toggle('active');
        this.indItem[this.currentSlide].classList.toggle('active');
    },



    nextSlide() {
        this.gotoSlide(this.currentSlide + 1);
    },


    prevSlide() {
        this.gotoSlide(this.currentSlide - 1)
    },


  


    prev() {
        this.prevSlide()
    },

    next() {
        this.nextSlide()

    },



    indicate(e) {
        let target = e.target
        if (target && target.classList.contains('indicator')) {

            this.gotoSlide(+target.dataset.slideTo)
        }

    },





    pressKey(e) {
        if (e.key === this.RIGHT_ARROW) this.next();
        if (e.key === this.LEFT_ARROW) this.prev();
        if (e.key === this.SPACE) this.pausePlay();
    },


    init() {
        this._initProps()
        this._initControls()
        this._initIndicators()
        this._initLiseners()
        this.timerID = setInterval(() => this.nextSlide(), this.interval);
    }



};
