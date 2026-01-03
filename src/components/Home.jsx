import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="border border-light m-2 p-3 text-center">
      <h2>HELLO, EVERYONE WE ARE HERE TO GIVE MANY COURSES TO YOU.</h2>

      <p>you can start to learn from our courses.</p>
      <Button color="primary" onClick={() => navigate('/view-course')}>Start learning</Button>

    </div>
  );
}
export default Home;
