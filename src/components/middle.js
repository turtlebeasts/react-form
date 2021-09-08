import React from "react";

export default class Middle extends React.Component{
    render(){
        return(
            <>
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <img src='https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23-1024x683.jpg' className='img-fluid'/>
                    </div>
                    <div className='col-4'>
                        <p>
                        The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h with the fastest reliably recorded speeds being 93 and 98 km/h, and as such has several adaptations for speed, including a light build, long thin legs and a long tail.
                        </p>
                        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Contact us</div>
  </div>
  <div class="mb-3">
    <textarea class="form-control"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                    </div>
                </div>
            </div>
            </>
        )
    }
}