import React from 'react';

export default function About() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <h1>About Me</h1>
        <div
          className="border-2 border-gray flex justify-center items-center"
          style={{ height: '300px', width: '300px' }}
        >
          Image Placeholder
        </div>
      </div>
      <div className="flex flex-col">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
        </p>
      </div>
    </div>
  );
}
