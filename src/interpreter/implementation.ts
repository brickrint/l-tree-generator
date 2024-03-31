import { StartSelector } from "../geometry/location/types";
import { ShapeBuilder } from "../geometry/shape/types";
import { AppSettings } from "../settings";
import { Stack } from "./stack";
import { SystemInterpreter } from "./types";

export class SystemToGeometryMapper implements SystemInterpreter {
  private currentLocation: Point = { x: 0, y: 0 };
  private currentAngle: DegreesAmount = 0;

  private systemTokens: List<Character> = [];
  private drawInstructions: List<Line> = [];

  constructor(private shapeBuilder: ShapeBuilder, private startSelector: StartSelector, private stack: Stack<TreeJoint>, private settings: AppSettings) {
    this.translateToken = this.translateToken.bind(this);
  }

  // Implement public methods:
  public translate(expression: Expression): List<Line> {
    this.currentLocation = { ...this.startSelector.selectStart() };
    this.systemTokens = expression.split('');
    this.systemTokens.forEach(this.translateToken);
    return this.drawInstructions;
  }

  private translateToken(token: Character) {
    console.log(this);
    switch (token) {
      case '0':
      case '1': {
        const line = this.shapeBuilder.createLine(this.currentLocation, this.settings.stemLength, this.currentAngle);
        this.drawInstructions.push(line);
        this.currentLocation = {...line.end};
        break;
      }

      case '[': {
        this.currentAngle -= this.settings.jointAngle;
        this.stack.push({
          location: { ...this.currentLocation },
          rotation: this.currentAngle,
          stemWidth: this.settings.stemLength
        });

        break;
      }

      case ']': {
        const lastJoint = this.stack.pop();
        this.currentLocation = { ...lastJoint.location };
        this.currentAngle = lastJoint.rotation + 2 * this.settings.jointAngle;

        break;
      }
    }
  }
}