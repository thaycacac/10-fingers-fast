export default function () {
// Constructor
  function Animate (canvas, options) {
    this.canvas = canvas
    this.options = defaults(options || {}, this.options)
    this.init()
  }

  // Default options
  Animate.prototype.options = {
    density: 10, // Affects how many poitns are created
    speed: 10, // Time in seconds to shift points
    sync: false, // Should points move in sync
    distance: 100, // Distance to move points
    lineColor: '255, 255, 255',
    circleColor: '255, 255, 255',
    radius: 20,
    lineWidth: 1,
    lines: 3, // Number of closest lines to draw
    updateClosest: false, // Update closet points each loop
    mouse: true // Link to mouse or random
  }

  // Setup everything
  Animate.prototype.init = function () {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.target = {
      position: {
        x: this.width / 2,
        y: this.height / 2
      }
    }

    // Setup canvas
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = this.canvas.getContext('2d')
    window.addEventListener('resize', this.resize.bind(this))
    if (this.options.mouse === true && !('ontouchstart' in window)) {
      window.addEventListener('mousemove', this.mousemove.bind(this))
    }
    this.points = []
    for (var x = 0; x < this.width; x = x + this.width / this.options.density) {
      for (var y = 0; y < this.height; y = y + this.height / this.options.density) {
        var point = new Point({
          x: x + Math.random() * this.width / this.options.density,
          y: y + Math.random() * this.height / this.options.density
        }, this.ctx, this.points.length + 1, this.options)
        this.points.push(point)
      }
    }

    // Setup Circles
    for (var i in this.points) {
      this.points[i].circle = new Circle(this.points[i], this.ctx, this.options)
    }
    this.findClosest() // Points
    this.animate() // Start the loop
    this.shiftPoints() // Start the tween loop
    if (this.options.mouse === false) {
      this.moveTarget() // Start the random target loop
    }
  }

  // Cycles through each Point and finds its neighbors
  Animate.prototype.findClosest = function () {
    for (var i = 0; i < this.points.length; i++) {
      // Save the point
      var point = this.points[i]
      // Reset
      point.closest = []
      // Cycle through the others
      for (var j = 0; j < this.points.length; j++) {
        // Point to test
        var testPoint = this.points[j]
        if (point.id !== testPoint.id) {
          var placed = false, k
          for (k = 0; k < this.options.lines; k ++) {
            if (!placed) {
              if (typeof point.closest[k] === 'undefined') {
                point.closest[k] = testPoint
                placed = true
              }
            }
          }

          for (k = 0; k < this.options.lines; k++) {
            if (!placed) {
              if (point.distanceTo(testPoint) < point.distanceTo(point.closest[k])) {
                point.closest[k] = testPoint
                placed = true
              }
            }
          }
        }
      }
    }
  }

  // Animation Loop
  Animate.prototype.animate = function () {
    var i
    // Should we recalucate closest?
    if (this.options.updateClosest) {
      this.findClosest()
    }
    // Calculate Opacity
    for (i in this.points) {
      if (this.points[i].distanceTo(this.target, true) < 5000) {
        this.points[i].opacity = 0.4
        this.points[i].circle.opacity = 0.6
      } else if (this.points[i].distanceTo(this.target, true) < 10000) {
        this.points[i].opacity = 0.2
        this.points[i].circle.opacity = 0.3
      } else if (this.points[i].distanceTo(this.target, true) < 30000) {
        this.points[i].opacity = 0.1
        this.points[i].circle.opacity = 0.2
      } else {
        this.points[i].opacity = 0.05
        this.points[i].circle.opacity = 0.05
      }
    }
    // Clear
    this.ctx.clearRect(0, 0, this.width, this.height)
    for (i in this.points) {
      this.points[i].drawLines()
      this.points[i].circle.draw()
    }
    window.requestAnimationFrame(this.animate.bind(this))
  }

  // Starts each point in tween loop
  Animate.prototype.shiftPoints = function () {
    for (var i in this.points) {
      this.points[i].shift()
    }
  }

  // Make sure the canvas is the right size
  Animate.prototype.resize = function () {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.canvas.width = this.width
    this.canvas.height = this.height
  }

  Animate.prototype.mousemove = function (event) {
    if (event.pageX || event.pageY) {
      this.target.position.x = event.pageX
      this.target.position.y = event.pageY
    } else if (event.clientX || event.clientY) {
      this.target.position.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
      this.target.position.y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop
    }
  }

  function Point (position, ctx, id, options) {
    this.options = options || {}
    this.id = id
    this.ctx = ctx
    this.position = position || {x: 0, y: 0}
    this.origin = {
      x: this.position.x,
      y: this.position.y
    }
    this.opacity = 0
    this.closest = []
  }

  Point.prototype.distanceTo = function (point, abs) {
    abs = abs || false
    var distance = Math.pow(this.position.x - point.position.x, 2) + Math.pow(this.position.y - point.position.y, 2)
    return abs ? Math.abs(distance) : distance
  }

  //  Draws lines to the closet points
  Point.prototype.drawLines = function () {
    for (var i in this.closest) {
      if (this.opacity > 0) {
        this.ctx.beginPath()
        this.ctx.moveTo(this.position.x, this.position.y)
        var test = i + 1
        if (!this.closest[test]) {
          test = 0
        }
        this.ctx.lineCap = 'round'
        this.ctx.strokeStyle = 'rgba(' + this.options.lineColor + ', ' + this.opacity + ')'
        this.ctx.lineWidth = this.options.lineWidth
        this.ctx.lineTo(this.closest[i].position.x, this.closest[i].position.y)
        this.ctx.stroke()
      }
    }
  }

  function Circle (point, ctx, options) {
    this.options = options || {}
    this.point = point || null
    this.radius = this.options.radius || null
    this.color = this.options.color || null
    this.opacity = 0
    this.ctx = ctx
  }

  // Draws Circle to context
  Circle.prototype.draw = function () {
    if (this.opacity > 0) {
      this.ctx.beginPath()
      this.ctx.arc(this.point.position.x, this.point.position.y, this.options.radius, 0, 2 * Math.PI, false)
      this.ctx.fillStyle = 'rgba(' + this.options.circleColor + ', ' + this.opacity + ')'
      this.ctx.fill()
    }
  }

  // Get the balls rolling
  new Animate(document.getElementById('canvas'))

  function defaults (object, src) {
    for (var i in src) {
      if (typeof object[i] === 'undefined') {
        object[i] = src[i]
      }
    }
    return object
  }
}
