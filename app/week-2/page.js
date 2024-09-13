import Heading from "./heading";

export default function Page() {
    let a = 5;
    let b = 10;

    return (
    <main>
      <Heading />
      <p>These are the demos for Week 2!</p>
      <p>The sum of a and b is: {a + b}</p>
    </main>
    );

}