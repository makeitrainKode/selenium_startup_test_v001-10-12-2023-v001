
const unit_run_loop = new Boolean(false);


const {Builder, By, Key, until} = require('selenium-webdriver');


(async function test_selenium() {
let driver = await new Builder().forBrowser("chrome").build();
try {

var selenium_test_step1 = await driver.get('http://www.google.com/');
var selenium_test_step2 = await driver.findElement(By.name('q')).sendKeys('You did it!!', Key.RETURN);
var selenium_test_step3 = await driver.wait(until.titleIs('Google'), 1000);

console.log(selenium_test_step1);
console.log(selenium_test_step2);
console.log(selenium_test_step3);



selenium_test_step1=null;
selenium_test_step2=null;
selenium_test_step3=null;


} finally {
await driver.quit();
}
})();




const testSeleniumObj = new test_selenium();

	 testSeleniumObj.prototype.toString() = function test_selenium_obj() { 

           return '${this.selenium_test_step3}';
          
	   };



function test_selenium_unit()
{
	 



	 try
	 {

         if(testSeleniumObj == "Google")
         	{
              console.log(testSeleniumObj.toString());
              

         	}

	 }

	 catch 
	 {
        
        console.log("Error 0x02: Selenium's settings or some runtime error occured.", console.error(testSeleniumObj.toString()))

	 }




}






function test_selenium_run()
{

  const running = new Boolean(false);

  try
    { 
        var finalTestStr = test_selenium_unit();

         if(finalTestStr.titleIs('Google'))
         {
          
           running=true;

           if(running)
           	 { 
           	 	console.log("Valid: Google is valid, Selenium is Running just fine",null );
           	      

           	  }

           	 else
           	 	{

                console.log("Invalid: Error with starting up with Selenium tests.")

           	 	}
         }



      }

catch {
         console.log(test_selenium_unit.error());
       
       }




}


const thrSeleniumObj = new selenium_thread_test();

function selenium_thread_test()
{


while(!unit_run_loop)
{

try
	{

 return new thrSeleniumObj  
 {
 let counter = 0;
    for (let i = 0; i < 99; i++) {
      var counterDisplay = counter++;
      console.log('Current running threads is: ' + counterDisplay.toString + 'and testing selenium', null);
      
    }


 }

  thrSeleniumObj =null;

}


catch{ 
 
     console.log(test_selenium_run.error());

 }

}





}


function run()
{

try
{ 

 test_selenium_run();




 }


catch
{


console.log(test_selenium_run.Error());

}



}


run()