import React from 'react';

function Contact(props){

    return(
<>
        <div className="container">
            <div ClassName="row  row-content">
                <div ClassName="col-12 col-sm-6 col-md-6">
                    <h1>Second row!</h1>
                    <p>Address</p><br/>
                    <i ClassName="fa fa-phone"></i> +98 93827268 <br/>
                    <i ClassName="fa fa-fax"></i> +982 82767t87<br/>
                    <i ClassName="fa fa-envelpe"></i> fantoniStore@gmail.com<br/>
                </div>
                    <div ClassName="col-12 col-sm-6 col-md-6">
                        <p>Map of your location</p>
                    </div>
                <div ClassName="col-12 col-sm-11 offset-sm-1">
                    <div ClassName="btn-group" role="group">
                            <a role="button" ClassName="btn btn-primary" href="#"><i ClassName="fa fa-phone"></i> Call</a>
                            <a role="button" ClassName="btn btn-info" href="#"><i ClassName="fa fa-skype"></i> Skype</a>
                            <a role="button" ClassName="btn btn-success" href="leila.orooji@gmail.com"><i ClassName="fa fa-envelope">Email</i></a>
                    </div>
                </div>
            </div>
            <div ClassName="row row-content">
                <div ClassName="col-12">
                    <h3>Send Us your feedback</h3>
                </div>
                <div ClassName="col-12 col-sm-9">
                    <form >
                        <div ClassName="form-group row">
                            <label for="firstname" ClassName="col-md-2 col-form-label">First Name</label>
                            <div ClassName="col-md-10">
                                <input type="text" ClassName="form-control" name="firstname" id="firstname" placeholder="First Name"/>
                            </div>
                        </div>
                        <div ClassName="form-group row">
                            <label for="lastname" ClassName="col-md-2 col-form-label">Last Name</label>
                            <div ClassName="col-md-10">
                                <input type="text" ClassName="form-control" name="lastname" id="lastname" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div ClassName="form-group row">
                            <label for="telnum" ClassName="col-12 col-md-2 col-form-label">Contact Tel.</label>
                            <div ClassName="col-5 col-md-3">
                                <input type="tel" ClassName="form-control" name="areacode" id="areacode" placeholder="Area Code"/>
                            </div>
                            <div ClassName="col-7 col-md-7">
                                <input type="tel" ClassName="form-control" name="telnum" id="telnum" placeholder="Tell Number"/>
                            </div>
                        </div>
                        <div ClassName="form-group row">
                            <label for="email" ClassName="col-md-2 col-form-label">Email</label>
                            <div ClassName="col-md-10">
                                <input type="email" ClassName="form-control" name="email" id="email" placeholder="Email Address"/>
                            </div>
                        </div>
                        <div ClassName="form-group row">
                            <div ClassName="col-md-6 offset-md-2">
                                <div ClassName="form-check">
                                    <input type="checkbox" ClassName="form-check-input" name="approve" id="approve" value=""/>
                                    <label for="approve" ClassName="form-check-label">
                                        <strong>May we contact you?</strong>
                                    </label>
                                </div>
                            </div>
                            <div ClassName="col-md-3 offset-md-1">
                                <select ClassName="form-control">
                                    <option>Tell</option>
                                    <option>Email</option>
                                </select>
                            </div>
                        </div>
                        <div ClassName="form-group row">
                            <label for="feedback" ClassName="col-md-2 col-form-label"> Your Feedback</label>
                            <div ClassName="col-md-10">
                                <textarea ClassName="form-control" name="feedback" id="feedback" row="7" placeholder="feedback"></textarea>
                            </div>
                        </div>
                        <div ClassName="form-group row">
                            <div ClassName="offset-md-2 col-md-10">
                                <button type="submit" ClassName="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div ClassName="col-12 col-sm">

                </div>
            </div>
        </div>

   
    </>

    )
}

export default Contact;