import Speaker from "./speaker.js";

const speaker1 = new Speaker("Red", 50);
const speaker2 = new Speaker("Blue", 100);

speaker1.displaySpeakerInfo()
speaker1.turnOn()
speaker1.playback()
speaker1.turnOff()

speaker2.displaySpeakerInfo()
speaker2.turnOn()
speaker2.playback()
speaker2.turnOff()