import react from 'react';
//import {Component} from "react";
import bootstrap from  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Bookdetails extends react.Component
{
    render()
    {
        return(
        <>
        <h1 className="text-center pt-5">Bookdetails</h1>
           <div class="d-flex justify-content-center mt-5">
                <form class="shadow-lg p-3 mb-5 bg-body rounded pt-4">
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">book_id</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="mn" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">title</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="fn" />
                        </div>
                </div>
                
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">author_fname</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="fn" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">author_lname</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="ln" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">released_year</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="ln" />
                    </div>
                </div>
                
                <div class="row mb-3">
                    <label class=" col-sm-4 col-form-label">stock_quantity </label>
                    <div class="col-sm-8">
                        <input type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">pages</label>
                    <div class="col-sm-8">
                        <input type="pages" class="form-control" id="inputPassword3" />
                    </div>
                </div>
               <div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
           </div>
        </>
    );
    }
}
export default Bookdetails;