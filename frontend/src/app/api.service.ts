import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
};

const pressOnUrl = "http://nununails-backend-dev.us-west-1.elasticbeanstalk.com/api/products/press-on";
const glueOnUrl = "http://nununails-backend-dev.us-west-1.elasticbeanstalk.com/api/products/glue-on";
const nudeFrenchUrl = "http://nununails-backend-dev.us-west-1.elasticbeanstalk.com/api/products/nude-french";
// const productDetail = "http://nununails-backend-dev.us-west-1.elasticbeanstalk.com/api/products/:product_id";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  //error handle function
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("An error occurred: ", error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError("Something bad happened; please try again later");
  };

  //extract response data function
  private extractData(res: Response) {
    let body = res;
    return body || { };
  };

  getPressOnNails(): Observable<any> {
    return this.http.get(pressOnUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  };

  getGlueOnNails(): Observable<any> {
    return this.http.get(glueOnUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  };

  getNudeFrenchNails(): Observable<any> {
    return this.http.get(nudeFrenchUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  };

  getProductDetail(productUrl): Observable<any> {
    return this.http.get(productUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  };


}
