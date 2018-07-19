<template>
  <div>
    <div class="navbar-fixed">
    <nav class="main-nav">
      <div class="nav-wrapper">
        <a href="#" data-target="mobile-navigation" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <a href="#!" class="brand-logo" style="padding: 5px 0 0 10px;"><img src="http://computerschmiede-jenbach.at/wp-content/uploads/2017/06/computerschmiede_weiss_300-e1496579812348.png" alt=""></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <router-link tag="li" :to="item.link" v-for="item in menuItems" :key="item.title"><a>{{ item.title }}</a></router-link>
          </ul>
        </div>
      </nav>
    </div>

    <ul class="sidenav grey darken-4 custom-sidenav" id="mobile-navigation">
      <li><a href="#!">Home</a></li>
      <li><a href="about.html">Über uns</a></li>
      <li><a href="about.html">Computerschmiede PC</a></li>
      <li><a href="3dprint.html">3D Druck</a></li>
      <li><a href="about.html">Fotografie & Videoproduktion</a></li>
      <li><a href="contact.html">Kontakt</a></li>
      <li><a href="#!"><strong>Öffnungszeiten</strong></a></li>
      <li><hr></li>
      <li><a href="#!">Mo: 9:00 - 12:00 / 13:00 - 18:30</a></li>
      <li><a href="#!">Di: 9:00 - 12:00 / 13:00 - 18:30</a></li>
      <li><a href="#!">Mi: 13:00 - 18:30</a></li>
      <li><a href="#!">Do: 9:00 - 12:00 / 13:00 - 18:30</a></li>
      <li><a href="#!">Fr: 9:00 - 12:00 / 13:00 - 18:30</a></li>
      <li><a href="#!">Sa: 9:00 - 13:00</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        { title: 'Home', link: '/', icon: '' },
        { title: 'Über uns', link: '/about', icon: '' },
        { title: 'Computerschmiede PC', link: '/computerschmiedepc', icon: '' },
        { title: '3D Druck', link: '/3d-print', icon: '' },
        { title: 'Fotografie & Videoproduktion', link: '/fotographyandvideoproduction', icon: '' },
        { title: 'Kontakt', link: '/contact', icon: '' }
      ]
    }
  }
}
</script>
