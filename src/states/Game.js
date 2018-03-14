/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    // left diagonal line
    var line = new Phaser.Line(0, this.world.height, this.world.centerX - 50, this.world.centerY);
    var graphics = game.add.graphics(0, 0);
    //var graphics = game.add.graphics(line.start.x,line.start.y); //if you have a static line
    graphics.lineStyle(2, 0xffd900, 1);
    graphics.moveTo(line.start.x, line.start.y); //moving position of graphic if you draw mulitple lines
    graphics.lineTo(line.end.x, line.end.y);
    graphics.endFill();

    // right diagonal line
    var line = new Phaser.Line(this.world.width, this.world.height, this.world.centerX + 50, this.world.centerY);
    var graphics = game.add.graphics(0, 0);
    //var graphics = game.add.graphics(line.start.x,line.start.y); //if you have a static line
    graphics.lineStyle(2, 0xffd900, 1);
    graphics.moveTo(line.start.x, line.start.y); //moving position of graphic if you draw mulitple lines
    graphics.lineTo(line.end.x, line.end.y);
    graphics.endFill();

    // horizontal line
    var line = new Phaser.Line(0, this.world.centerY, this.world.width, this.world.height / 2);
    var graphics = game.add.graphics(0, 0);
    //var graphics = game.add.graphics(line.start.x,line.start.y); //if you have a static line
    graphics.lineStyle(2, 0xffd900, 1);
    graphics.moveTo(line.start.x, line.start.y); //moving position of graphic if you draw mulitple lines
    graphics.lineTo(line.end.x, line.end.y);
    graphics.endFill();

  }

  render() {
    if (__DEV__) {
    }
  }
}
