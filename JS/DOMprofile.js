
//Fetch users details
 
let url=["https://fsd1.herokuapp.com/users/1/details","https://fsd1.herokuapp.com/users/1/followers/suggestions","https://fsd1.herokuapp.com/users/1/tweets","https://fsd1.herokuapp.com/users/1/following","https://fsd1.herokuapp.com/users/1/followers"];
var Arrayofpromises=url.map(v=>fetch(v));

var Promiseall= Promise.all(Arrayofpromises)

Promiseall.then(response=>{
  var promise=response.map(res=>res.json());
  promise[0].then(d=>updateProfile(d.data))
  promise[1].then(d=>updateSugg(d.data))
  promise[2].then(d=>updateTweet(d.data))
  promise[3].then(d=>updatefollow(d.data))
  promise[4].then(d=>updatefollowers(d.data))
});


// var p= fetch("https://fsd1.herokuapp.com/users/1/details");
// p.then((res)=>res.json())
//        .then(d=> updateProfile(d.data));

       function updateProfile(data)
       {
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

         //user bio
         var f1=document.querySelector("div .f1 div:nth-child(1) ");
         f1.textContent=data.full_name;
         var f2=document.querySelector("div .f1 div:nth-child(2) ");
         f2.textContent=data.user_name;
         var f3=document.querySelector("div .f1 div:nth-child(3) ");
         f3.textContent=data.user_from;
         var f4=document.querySelector("div .f1 div:nth-child(4) ");
         f4.textContent=data.user_email;
         var f5=document.querySelector("div .f1 div:nth-child(5) ");
         f5.textContent=data.user_created_at;
         var f6=document.querySelector("div .f1 div:nth-child(6) ");
         f6.textContent=data.user_birthday;
       }



 //  to fetch the media uploded by the user-Photo and videos
 // the link in the document and api is invalid  =https://example.com/images/53454.jpg
//  var promise2=fetch("https://fsd1.herokuapp.com/users/1/media/");
//  promise2.then((res1)=>res1.json())
//          .then(d=>updatePicVid(d.data)); 

//  function updatePicVid(data)
//  {
//  	var imgEl=document.createElement("img");
//  	imgEl.src="Images/Profile_img/user.png";
//  	var pic=document.querySelector("div #img1");
//  	pic.src=data.url;
//  }   


 // Fetch Suggestions of people the user can follow 
 // the link has only one array object but they have mentioned 2 obj in a array in pdf.

//  var promise3=fetch("https://fsd1.herokuapp.com/users/1/followers/suggestions");
//      promise3.then((res2)=>res2.json())
//              .then(d=>updateSugg(d.data));

            function updateSugg(data)
            {
              var updatesug=document.querySelector('div .follow-body');
              var div='';
              for(var i=0;i<data.length;i++)
              {
              div+=` <div class="user">
              <div class="user-avatar">
                  <img src="Images/Profile_img/user.png" alt="Avatar">
              </div>
              <div class="user-avatar">
                  <span class="username">${data[i].full_name}</span>
                  <span class="userid">@${data[i].user_name}</span>
                  <a class="btn follow" href="#">Follow</a>
              </div>
          </div> `
              }
              updatesug.innerHTML=div;
            	// for(var i=0;i<data.length;i++)
            	// {
              //     var fo1=document.querySelector("div .follow-body span:nth-child(1)");
              //     fo1.appendChild(document.createTextNode(data[i].full_name));
              //     var fo1=document.querySelector("div .follow-body span:nth-child(2)");
              //     fo1.appendChild(document.createTextNode(data[i].user_name));
              //     var fo2=document.querySelector("div .follow-body #f2 span:nth-child(1)");
              //     fo2.appendChild(document.createTextNode(data[i].full_name));
              //     var fo2=document.querySelector("div .follow-body #f2 span:nth-child(2)");
              //     fo2.appendChild(document.createTextNode(data[i].user_name));
              //    }
            }

  
  //Get Tweets for profiles



              // var promise4=fetch("https://fsd1.herokuapp.com/users/1/tweets");
              // promise4.then((res3)=>res3.json())
              //         .then(d=>updateTweet(d.data));
        

            //   Getting and error ---invalid url for(profile_img: “https://domain.com/images/user_74389.jpg”,
            //     cover_img: “https://domain.com/images/user_cover_74389.jpg”,)


                      function updateTweet(data)
                      {
                        var updatetweet=document.querySelector('div  #row1');
                        var div='';
                        for(var i=0;i<data.length;i++){
                        div+=`<div class="user-avatar" style="width:100%">
                        <div class="comment-header">
                            <div class="box">
                                <img src="Images/Profile_img/user.png" alt="Avatar" style="vertical-align: middle;">
                                <span>${data[i].user.full_name}</span>
                                <span>${data[i].user.user_email}</span>
                            </div>
                            <div class="box">
                            </div>
                        </div>
                        <div class="comment-body">
                            <p style="margin:4% ">${data[i].text}
                            </p>
                            </div>
                            <div class="comment-footer">
                                <div>
                                    '<img src="Images/Profile_img/Home_page-06.png" alt="comment">
                                    <span> ${data[i].stats.likes} </span>
                                </div>
                                <div>
                                    <img src="Images/Profile_img/Home_page-07.png" alt="refresh">
                                    <span>${data[i].stats.comments}</span>
                                </div>
                                <div>
                                    <img src="Images/Profile_img/Home_page-08.png" alt="heart">
                                    <span>${data[i].stats.retweets}</span>
                                </div>
                                <div>
                                    <img src="Images/Profile_img/Home_page-09.png" alt="mail">
                                    <span>${data[i].stats.likes}</span>
                                </div></div></div>`
                                    }

                          updatetweet.innerHTML=div;

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
                      }

// Following

        // var promise5=fetch("https://fsd1.herokuapp.com/users/1/following"); 
        // promise5.then(res=>res.json())
        // .then(d=>updatefollow(d.data));
        
    
        function updatefollow(data)
        {
          var following=document.querySelector('div #follow');
          var div='';
          for(var i=0;i<data.length;i++)
          {
           div+=`<div class="header"></div>
           <div class="body">
               <div class="left">
                   <img src="Images/Profile_img/user.png" alt="profile" style="width:80px">
               </div><div class="right" style="padding-top: 27px; padding-right: 117px;">
                   <div class="user"><b>Username__:</b>${data[i].full_name}</div>
                   <br>
                   <div class="userid1"><b>Email_id__:</b>${data[i].user_email}</div>

                   <p><b>User_Bio__:</b>${data[i].user_bio}</p>
               </div>
           </div>`
           following.innerHTML=div;
          // var f1=document.querySelector("div .main div .user");
          // f1.appendChild(document.createTextNode(data[i].full_name));
          // var f1=document.querySelector("div .main div .userid1");
          // f1.appendChild(document.createTextNode(data[i].user_email));
          // var f1=document.querySelector("div .main p");
          // f1.appendChild(document.createTextNode(data[i].user_bio));
          }
        }

// followers

        // var promise5=fetch("https://fsd1.herokuapp.com/users/1/followers"); 
        // promise5.then(res=>res.json())
        // .then(d=>updatefollowers(d.data));
        
        function updatefollowers(data)
        {
          var followers=document.querySelector('div #followers1');
          var div='';
          for(var i=0;i<data.length;i++)
          {
           div+=`<div class='followers12'> <div class="header"></div>
           <div class="body">
               <div class="left">
                   <img src="Images/Profile_img/user.png" alt="profile" style="width:80px">
               </div><div class="right" style="padding-top: 27px; padding-right: 117px;">
                   <div class="user1"><b>Full_name</b>:${data[i].full_name}</div>
                   <br>
                   <div class="user1"><b>Username</b>   :${data[i].user_name}</div>
                   <div class="userid2"><b>Email_id</b>  :${data[i].user_email}</div><br>
                   <p><b>User Bio....</b>:<br>${data[i].user_bio}</p>
               </div>
           </div>
           </div></div>`;
          }
           followers.innerHTML=div;




          // var f1=document.querySelector("div .main div .user1");
          // f1.appendChild(document.createTextNode(data[i].full_name));
          // var f1=document.querySelector("div .main div .userid2");
          // f1.appendChild(document.createTextNode(data[i].user_email));
          // var f1=document.querySelector("div .main p");
          // f1.appendChild(document.createTextNode(data[i].user_bio));
        
        }


        