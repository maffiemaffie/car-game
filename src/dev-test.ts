import { DevRoad } from "./dev-road";
import { DevPlayer } from "./dev-player";

class InfiniteRoad implements DevRoad {
    isValidPosition(mile: number, lane: number): boolean {
        return true;
    }
}

class SixLaneRoad implements DevRoad {
    isValidPosition(mile: number, lane: number): boolean {
        return (lane >= -3 && lane <= 3 && lane != 0);
    }
}

const player1 = new DevPlayer(new InfiniteRoad());
const player2 = new DevPlayer(new SixLaneRoad());
const player3 = new DevPlayer(new SixLaneRoad(), 2, -1);

console.log('Players initialized');
console.log('player1.sayLocation(): expecting "mile: 0, lane: 1"');
player1.sayLocation();
console.log('player2.sayLocation(): expecting "mile: 0, lane: 1"');
player2.sayLocation();
console.log('player3.sayLocation(): expecting "mile: 2, lane: -1"');
player3.sayLocation();

player1.moveForward(5);
player2.moveForward(5);
player3.moveForward(5);

console.log('Players moved forward');
console.log('player1.sayLocation(): expecting "mile:5, lane: 1"');
player1.sayLocation();
console.log('player2.sayLocation(): expecting "mile:5, lane: 1"');
player2.sayLocation();
console.log('player3.sayLocation(): expecting "mile:7, lane: -1"');
player3.sayLocation();

player1.changeLanes(DevPlayer.LaneChangeDirection.Left);
player2.changeLanes(DevPlayer.LaneChangeDirection.Right);
player3.changeLanes(DevPlayer.LaneChangeDirection.Left);

console.log('Players changed lanes');
console.log('player1.sayLocation(): expecting "mile:5, lane: 0"');
player1.sayLocation();
console.log('player2.sayLocation(): expecting "mile:5, lane: 2"');
player2.sayLocation();
console.log('player3.sayLocation(): expecting "mile:7, lane: -1"');
player3.sayLocation();