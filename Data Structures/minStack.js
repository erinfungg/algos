var MinStack = function() {
  this.stack = [];
  this.min = [];
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (!this.min.length || x <= this.min[this.min.length - 1]) this.min.push(x);
};

MinStack.prototype.pop = function() {
  const popped = this.stack.pop();
  if (this.min[this.min.length - 1] === popped) this.min.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
};
