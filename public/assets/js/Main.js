  const toast = document.querySelector(".toast__"), 
        closeIcon = document.querySelector(".close_alert")
        leaview = document.querySelector(".leaview-1", )
        progress = document.querySelector(".progress__");


 
     

        leaview.addEventListener("click", () =>{
            toast.classList.add("active__1");
            progress.classList.add("active__1");

            setTimeout(() =>{
                toast.classList.remove("active__1");
            }, 5000); //1s = 1000 miliseconds
            
            setTimeout(() =>{
                progress.classList.remove("active__1");
            }, 5300);
        });

        closeIcon.addEventListener("click", () =>{
            toast.classList.remove("active__1")

            setTimeout(() =>{
                progress.classList.remove("active__1");
            }, 300);
            
        });











   
   document.querySelector(".leaview-1").addEventListener("click", function(){
            document.querySelector(".popup").classList.add("active");
        });
        document.querySelector(".leaview-2").addEventListener("click", function(){
            document.querySelector(".popup").classList.add("active");
        });
        document.querySelector(".leaview-3").addEventListener("click", function(){
            document.querySelector(".popup").classList.add("active");
        });
        document.querySelector(".leaview-4").addEventListener("click", function(){
            document.querySelector(".popup").classList.add("active");
        });
        document.querySelector(".leaview-5").addEventListener("click", function(){
            document.querySelector(".popup").classList.add("active");
        });
        document.querySelector(".leaview-6").addEventListener("click", function(){
            document.querySelector(".popup").classList.add("active");
        });
        document.querySelector(".leaview-7").addEventListener("click", function(){
            document.querySelector(".popup").classList.add("active");
        });
        document.querySelector(".leaview-8").addEventListener("click", function(){
            document.querySelector(".popup").classList.add("active");
        });
        document.querySelector(".leaview" ).addEventListener("click", function(){
            document.querySelector(".blur__sec").classList.add("active");
        });
        document.querySelector(".leaview").addEventListener("click", function(){
            document.querySelector(".webkit_scrollbar_hide").classList.add("active");
        });
        document.querySelector(".like__pop").addEventListener("click", function(){
            document.querySelector(".bxs-heart").classList.add("active");
        });
        document.querySelector(".like__pop").addEventListener("click", function(){
            document.querySelector(".like__pop").classList.add("active");
        });

        document.querySelector(".bx-like").addEventListener("click", function(){
            document.querySelector(".bxs-like").classList.add("active");
        });
        document.querySelector(".bx-like").addEventListener("click", function(){
            document.querySelector(".bx-like").classList.add("active");
        });
        document.querySelector(".saved__pop").addEventListener("click", function(){
            document.querySelector(".bxs-bookmark-star").classList.add("active");
        });
        document.querySelector(".saved__pop").addEventListener("click", function(){
            document.querySelector(".saved__pop").classList.add("active");
        });
      
        
        
     
        document.querySelector(".popup .popup_close-btn").addEventListener("click", function(){
            document.querySelector(".popup").classList.remove("active");
        });
        document.querySelector(".popup .popup_close-btn").addEventListener("click", function(){
            document.querySelector(".blur__sec").classList.remove("active");
        });
        document.querySelector(".bxs-heart").addEventListener("click", function(){
            document.querySelector(".bxs-heart").classList.remove("active");
        });
        document.querySelector(".bxs-heart").addEventListener("click", function(){
            document.querySelector(".like__pop").classList.remove("active");
        });
        document.querySelector(".bxs-like").addEventListener("click", function(){
            document.querySelector(".bxs-like").classList.remove("active");
        });
        document.querySelector(".bxs-like").addEventListener("click", function(){
            document.querySelector(".bx-like").classList.remove("active");
        });
         document.querySelector(".bxs-like").addEventListener("click", function(){
            document.querySelector(".bxs-like").classList.remove("active");
        });
        document.querySelector(".bxs-like").addEventListener("click", function(){
            document.querySelector(".bx-like").classList.remove("active");
        });
        document.querySelector(".bxs-bookmark-star").addEventListener("click", function(){
            document.querySelector(".bxs-bookmark-star").classList.remove("active");
        });
        document.querySelector(".bxs-bookmark-star").addEventListener("click", function(){
            document.querySelector(".saved__pop").classList.remove("active");
        });
        
       
        
     
    
    
          
        
        
        