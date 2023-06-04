export interface DevRoad {
    /**
     * Tests if a specified position can be occupied.
     * @param mile The mile coordinate of the specified position.
     * @param lane The lane coordinate of the specified position.
     * @returns True if the specified position is occupiable.
     */
    isValidPosition(mile:number, lane:number):boolean;
}