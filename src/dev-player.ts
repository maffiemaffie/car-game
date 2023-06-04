import { DevRoad } from "./dev-road";

export class DevPlayer {
    private mile:number;
    private lane:number;

    private road:DevRoad; 

    public constructor() {}

    /**
     * Moves the player a specified distance on its active road.
     * @param distance Distance forward (positive) or backward (negative) to move the player.
     */
    public moveForward(distance:number) {
        this.mile += distance;
    }

    /**
     * Move the player car one lane to the left or right on its active road.
     * @param direction The direction [Left]{@link DevPlayer.LaneChangeDirection.Left} or [Right]{@link DevPlayer.LaneChangeDirection.Right} to change lanes.
     * @todo Validate lane changes.
     */
    public changeLanes(direction:DevPlayer.LaneChangeDirection) {
        const sign = Math.sign(this.lane) // -1 if traveling south, 1 if traveling north
        const newLane = sign * (Math.abs(this.lane) + (direction == DevPlayer.LaneChangeDirection.Left ? -1 : 1)); // move one closer to the inside if left, one closer to the outside if right
        
        if (!this.road.isValidPosition(this.mile, newLane)) return; // validate

        this.lane = sign * newLane;
    }
}

export namespace DevPlayer {
    export enum LaneChangeDirection {
        Right,
        Left
    }
}