function SwipeCarouselre() {
    Carouselre.apply(this, arguments)
}

SwipeCarouselre.prototype = Object.create(Carouselre.prototype)
SwipeCarouselre.prototype.constructor = SwipeCarouselre


SwipeCarouselre.prototype._swipeStart = function(e) {
    this.swipeStartX = e.changedTouches[0].pageX

}


SwipeCarouselre.prototype._swipeEnd = function(e) {
    this.swipeEndX = e.changedTouches[0].pageX


    if (this.swipeStartX - this.swipeEndX < 100) this.prev()
    if (this.swipeStartX - this.swipeEndX > 100) this.next()


}

SwipeCarouselre.prototype._initLiseners = function() {
    Carouselre.prototype._initLiseners.apply(this)
    this.container.addEventListener('touchstart', this._swipeStart.bind(this))
    this.container.addEventListener('touchend', this._swipeEnd.bind(this))

}