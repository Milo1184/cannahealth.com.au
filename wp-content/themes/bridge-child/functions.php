<?php

// enqueue the child theme stylesheet

Function wp_schools_enqueue_scripts() {
wp_enqueue_script( 'core', get_stylesheet_directory_uri() . '/core.js', array( 'jquery' ), '1.0.2', true );
wp_register_style( 'childstyle', get_stylesheet_directory_uri() . '/style.css', '1.0.1'  );
wp_enqueue_style( 'childstyle' );
}
add_action( 'wp_enqueue_scripts', 'wp_schools_enqueue_scripts', 11);
