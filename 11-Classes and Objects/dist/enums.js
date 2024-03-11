"use strict";
var Position;
(function (Position) {
    Position[Position["First"] = 1] = "First";
    Position[Position["Second"] = 2] = "Second";
    Position[Position["Third"] = 3] = "Third";
    Position[Position["Fourth"] = 10] = "Fourth";
})(Position || (Position = {}));
const ajPosition = Position.First;
const amPositoin = Position.Fourth;
