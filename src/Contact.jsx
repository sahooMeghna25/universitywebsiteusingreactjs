import React  from "react";

const Contact=()=>{
    return(

        <>

<div class="container">
<marquee direction="right"  scrollamount="12"><h2>Connect With Us</h2></marquee>
  <form action="" onSubmit="">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="addres">Address</label>
      </div>
      <div class="col-75">
        <input type="text" name="addres" id="" placeholder="your addres" required/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="msg">Type Message</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="message" placeholder="Write something.." required></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit" />
    </div>
  </form>
</div>

        </>
    );
};

export default Contact;