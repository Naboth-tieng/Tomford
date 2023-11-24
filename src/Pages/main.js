import { Route, Routes } from "react-router-dom";
import center from "./Tomford/bakcimg.jpeg";

export default function Main() {
  return (
    <>
      <div className = "contmain" >
        <img src={center} style={{width:"100%"}}/>
        <p className="word">
          Tom Ford, the epitome of luxury and sophistication, effortlessly
          transports its users to a realm of unparalleled excitement and
          pleasure, steeped in a regal opulence that is simply unmatched. With
          each meticulously crafted fragrance, Tom Ford unveils a sensorial
          journey that transcends the ordinary, ushering enthusiasts into a
          world where elegance and grandeur intertwine. The essence of a Tom
          Ford creation lies not only in the exquisite notes that dance upon the
          skin but also in the evocative narratives they unfurl, weaving tales
          of magnificence and allure fit for royalty. From the very first
          intoxicating whiff, Tom Ford fragrances envelop the senses,
          transporting one to a realm where every inhale is a passport to
          sumptuous sophistication. With every spritz, a symphony of aromas
          unfolds, painting an olfactory canvas that captivates the soul and
          indulges the senses. Tom Ford's scents are not mere fragrances; they
          are keyholders to a world where every wearer becomes a connoisseur of
          luxurious delights, a sovereign of indulgence, and a voyager in the
          realm of scent, basking in the regal tapestry of pleasure and
          excitement that only Tom Ford can bestow.
        </p>
      </div>
    </>
  );
}
