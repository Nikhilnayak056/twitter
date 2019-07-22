var p= "https://fsd1.herokuapp.com/users/1/details";
var promise2="https://fsd1.herokuapp.com/users/1/media/";
var promise3="https://fsd1.herokuapp.com/users/1/followers/suggestions";
var promise4="https://fsd1.herokuapp.com/users/1/tweets";

//storing the urls in a array...........
// -----------------------------------------------------------------------------
var urls = Array.of(p,promise2,promise3,promise4);
// -----------------------------------------------------------------------------
//Fetching the urls 
var fetch_Url= urls.map(url=>fetch(url));

//groupingup all the promises

var promise_All= Promise.all(fetch_Url); 

//Storing all the responses in a array then accessing the individual responses from the array  

promise_All.then(response=>{
  let promises = response.map(res => res.json());
  promises[0].then(d=> updateProfile(d.data));
  promises[1].then(d=> updatePicVid(d.data));
  promises[2].then(d=> updateSugg(d.data));
  promises[3].then(d=> updateTweet(d.data));

});
//Promise.all(store_res).then(d => console.log(d));
// ---------------------------------------------------------------------
 
 /*store_res[0].then(d => updateProfile(d.data));
 store_res[1].then(d => updatePicVid(d.data));
 store_res[2].then(d => updateSugg(d.data));
 store_res[3].then(d => updat)eTweet(d.data));
*/
// ------------------------------------------------------------------------

//Fetch users details

// var p= fetch("https://fsd1.herokuapp.com/users/1/details");
// p.then((res)=>res.json())
//        .then(d=> updateProfile(d.data));


       function updateProfile(data)
       {
         console.log('********************')
         console.log(data);
         console.log('********************');
       	//Updateing The header details
       	var profileName=document.querySelector("div .right .username");
       	profileName.textContent=data.full_name;
       	var profileImage=document.querySelector("div .left ");
       	profileImage.src=data.profile_img;
       	var id=document.querySelector("div .right .userid");
       	id.textContent=data.user_name;

         //Tweets,following,followers

        var tweets=document.querySelector("div .box p:nth-child(2) ");
        tweets.textContent=data.stats.tweets;
        var following=document.querySelector("div #box2 p:nth-child(2) ");
        following.textContent=data.stats.followers;
        var followers=document.querySelector("div #box3 p:nth-child(2) ");
        followers.textContent=data.stats.following;

         //user bio for profile page

         // var f1=document.querySelector("div .f1 div:nth-child(1) ");
       // var f2=document.querySelector("div .f1 div:nth-child(2) ");
         // f2.textContent=data.user_name;  // f1.textContent=data.full_name;
         // 
         // var f3=document.querySelector("div .f1 div:nth-child(3) ");
         // f3.textContent=data.user_from;
         // var f4=document.querySelector("div .f1 div:nth-child(4) ");
         // f4.textContent=data.user_email;
         // var f5=document.querySelector("div .f1 div:nth-child(5) ");
         // f5.textContent=data.user_created_at;
         // var f6=document.querySelector("div .f1 div:nth-child(6) ");
         // f6.textContent=data.user_birthday;
         //  var f7=document.querySelector("div .f1 div:nth-child(7) ");
         // f7.textContent=data.user_bio;
         //  var f8=document.querySelector("div .f1 div:nth-child(8) ");
         // f8.textContent=data.user_website;
       }



 //  to fetch the media uploded by the user-Photo and videos
 
//  var promise2=fetch("https://fsd1.herokuapp.com/users/1/media/");
//  promise2.then((res1)=>res1.json())
//          .then(d=>updatePicVid(d.data)); 

 function updatePicVid(data)
 {
 	var imgEl=document.createElement("img");
 	imgEl.src="Images/Profile_img/user.png";
 	var pic=document.querySelector("div #img1");
 	pic.src=data[1].url;
 }   


 // Fetch Suggestions of people the user can follow 
 // the link has only one array object but they have mentioned 2 obj  on pdf.

//  var promise3=fetch("https://fsd1.herokuapp.com/users/1/followers/suggestions");
//      promise3.then((res2)=>res2.json())
//              .then(d=>updateSugg(d.data));

            function updateSugg(data)
            {
              let div=``;
              let followSug=document.querySelector('div .follow-body');
              for(var i=0;i<data.length;i++){
                div+=`<div class="user">
                      <div class="user-avatar">
                        <img src="Images/homeImg/user.png" alt="Avatar">
                      </div>
                      <div class="user-avatar">
                        <span class="username">${data[i].full_name}</span>
                        <span class="userid">@</span>
                        <a class="btn follow" href="#">Follow</a>
                      </div>
                    </div>`
              }
              followSug.innerHTML=div;
            }
            // {
            	
            // 	{
            //       var fo1=document.querySelector("div .follow-body span:nth-child(1)");
            //       fo1.appendChild(document.createTextNode(data[0].full_name));
            //       var fo1=document.querySelector("div .follow-body span:nth-child(2)");
            //       fo1.appendChild(document.createTextNode(data[0].user_name));
            //      }
            // }

  
  //Get Tweets From following profiles

  // var promise4=fetch("https://fsd1.herokuapp.com/users/1/tweets");
  //     promise4.then((res3)=>res3.json())
  //             .then(d=>updateTweet(d.data));

              function updateTweet(data){

                let divblock='';
                let updateTweets=document.querySelector('div .row1');
                for(var i=0;i<data.length;i++)
                {
                  divblock+= `<div class="user-avatar" style="width:100%">
                  <div class="comment-header">
                    <div class="box">
                      <img src="Images/homeImg/user.png" alt="Avatar" style="vertical-align: middle;">
                      <span>${data[i].user.full_name}</span>
                      <span>${data[i].user.user_email}</span>
                    </div>
                    <div class="box">
                      <img src="">
                    </div>
                  </div>
                      <div class="comment-body">
                    <p style="margin:4% ">${data[i].text}
                  <br>  //  .... getting an error invalid url for(profile_img: “https://domain.com/images/user_74389.jpg”,
                    //   cover_img: “https://domain.com/images/user_cover_74389.jpg”,)
                
                      </p>
                    </div>
                    <div class="comment-footer">
                      <div>
                        '<img src="Images/homeImg/Home_page-06.png" alt="comment">
                        <span>${data[i].stats.likes}</span>
                      </div>
                      <div>
                        <img src="Images/homeImg/Home_page-07.png" alt="refresh">
                        <span>${data[i].stats.comments}</span>
                      </div>
                      <div>
                        <img src="Images/homeImg/Home_page-08.png" alt="heart">
                        <span>${data[i].stats.retweets}</span>
                      </div>
                      <div>
                        <img src="Images/homeImg/Home_page-09.png" alt="mail">
                        <span>${data[i].stats.likes}</span>
                      </div>
                    </div>
                  </div>`
                }

              updateTweets.innerHTML=divblock;
              }

              //using single promise
              //.......................................................................................
                //iterating a loop through each tweets
                // for(var i=0;i<data.length;i++)
                // {
                //   //profile img 
                // var i1=document.querySelector("div .box img");
                // i1.src="Images/homeImg/user.png"; //data[0].profile_img is invalid
                // var t1=document.querySelector("div .comment-header span:nth-child(2)");
                // t1.appendChild(document.createTextNode(data[i].user.full_name));
                //  var t1=document.querySelector("div .comment-header span:nth-child(3)");
                // t1.appendChild(document.createTextNode(data[i].user.user_email));
                // var s1=document.querySelector("div .comment-body p");
                // s1.appendChild(document.createTextNode(data[i].text));
                // var s2=document.createElement("video");
                // s2.src= "https://fsd1.herokuapp.com/videos/media_3.mp4";
                // s2.width=500;
                // s2.controls=true;

                // //updating comment footer

                // document.querySelector("div .comment-body").appendChild(s2);
                // var c1=document.querySelector("div .comment-footer div:nth-child(1)");
                // c1.appendChild(document.createTextNode(data[i].stats.likes));
                // var c1=document.querySelector("div .comment-footer div:nth-child(2)");
                // c1.appendChild(document.createTextNode(data[i].stats.comments));
                // var c1=document.querySelector("div .comment-footer div:nth-child(3)");
                // c1.appendChild(document.createTextNode(data[i].stats.likes));
                // var c1=document.querySelector("div .comment-footer div:nth-child(4)");
                // c1.appendChild(document.createTextNode(data[i].stats.comments));
                // }
              
function profilePageRedir() {
  window.location.href = '/profile.html';
}