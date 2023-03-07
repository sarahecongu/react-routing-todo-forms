import React from "react";
import "./NavBar.css";

const Profile = () => {
  return (
    <div>
      <h3><span>Welcome To</span><img src="fundi_bots_website_logo_color.png" /><b><span>Uganda</span></b>

      </h3>

      <div className="grid">
       
        <div>
          <h4>About Us</h4>
          <p>
            Fundi Bots was started in 2011 by Solomon King Benge as a
            hobby/passion project to help students understand science through
            robotics. Activities during this time were focused primarily on
            talks, presentations, and demonstration of robotics in classrooms,
            facilitated through Cafe Scientifique, an organization led by Betty
            Kituyi who eventually became our Regional Manager for Eastern Uganda
          </p>
          <p>
          Fundi Bots promotes improved, practical science education in African schools and communities through the provision of hands-on skills and project-based training, with a strong focus on rural and underprivileged regions and
           a push for equitable inclusion for girls
          </p>
        </div>
       
       

        <div>
          <h4>location</h4>
          <p>Physical Addresses</p>
          <p>
          Plot 1626, Masembe Road,
        Kyadondo Block 196, Komamboga.
        Kampala
          </p>
          <p>Plot 36 Wanale Road
Mbale

</p>
          <p>
            Room 3/4, Ground Floor, (Hotel Pearl Afrique Rentals) Plot 6, 7, 8,
            Paul Odong Road Gulu
          </p>
          <p>Ntare Road, Opposite former Ngabo Academy Mbarar</p>
        </div>
        <div>
          <h4>Contacts</h4>

          <p>Phone Number +256 392000159 Email kampala@fundibots.org</p>
          <p>Phone Number
+256 392003561

Email
mbale@fundibots.org</p>
          <p>Phone Number
+256 394856193

Email
gulu@fundibots.org</p>
Phone Number
+256 783989435 | +256 754751814
<p>
Email
mbarara@fundibots.org
</p>
        </div>
        <div>
          <h4>Our Mission</h4>
        <p>Our mission is to accelerate science learning in Africa</p>
          <div>
          <h4>Our Vision</h4>
          <p>our vision is to see Africa transformed through science.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
