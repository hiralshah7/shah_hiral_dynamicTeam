function fetch_info(i) {
    let profile = ["images/boy.svg", "images/girl.svg"];
    let name = [
        "Hiral!", "Hannah!"
    ];
    let status = ["Designer", "Developer"];
    document.getElementById("profile").src = profile[i];
    document.getElementById("name").innerHTML = name[i];
    document.getElementById("status").innerHTML = status[i];
    document.getElementById("about").innerHTML = name[i] + "Hello, my name is Hiral Shah . I am a professional Web designer with over 3 years of experience. I have much experience in designing Websites. I use Adobe Illustrator and Adobe Photoshop to design the graphics for Bandistel . Not only that, I also provide AI or PSD files. I Personally started Project for Bandistel Brand and work along with Hannah! for this Project and it was Fun working with her." +
        "Hey, I am Hannah! & I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript, also for the Bandistel Project, I have worked with My Designer Hiral Shah and Basically I am living in Newyork but for this Project, I use to work from Canada Itself."

}