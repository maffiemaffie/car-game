import { DevRoad } from "./dev-road";

export class DevPlayer {
    private mile:number;
    private lane:number;

    private road:DevRoad; 

    /**
     * Initializes a new instance of the {@link DevPlayer} class.
     * @param road The road that the player car should start on.
     * @param mile The mile coordinate of the player's initial position. Default is 0.
     * @param lane The lane coordinate of the player's initial position. Default is the left-most lane, travelling north.
     */
    public constructor(road:DevRoad, mile:number = 0, lane:number = 1) {
        this.mile = mile;
        this.lane = lane;
        this.road = road;
    }

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

    public sayLocation() {
        console.log(`mile: ${this.mile}, lane: ${this.lane}`);
    }
}

export namespace DevPlayer {
    export enum LaneChangeDirection {
        Right,
        Left
    }
}