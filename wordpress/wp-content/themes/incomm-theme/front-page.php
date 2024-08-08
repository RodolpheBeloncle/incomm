<?php
// NB: la page .php est utilisée pour afficher les recettes, assignée la page home.php comme page de recette dans le backoffice
get_header();
?>

<style>
    body {
        font-family: Helvetica Neue, Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #e6ecf8;
        margin: 0;
        padding: 0;
    }

    p,
    li {
        font-size: 1.4rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .recettes-container {
        margin: 10px auto;
        padding: 20px;
        max-width: 1200px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .recettes-container h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    .recettes-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    .recette-card {
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.2s ease-in-out;
        flex-direction: column;
        display: flex;
        height: 400px;
        width: calc(100% / 3 - 20px);
        max-width: 300px;
    }

    .recette-card:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .recette-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-bottom: 1px solid #eee;
    }

    .recette-title,
    .recette-details {
        padding: 10px;
        flex-grow: 1;
    }

    .recette-title {
        font-size: 1.8rem;
        margin: 0;
        color: #333;
    }

    .recette-details {
        margin-top: auto;
    }

    @media (max-width: 900px) {
        .recette-card {
            width: calc(50% - 20px);
        }
    }

    @media (max-width: 600px) {
        .recette-card {
            width: 100%;
        }
    }

    @media (min-width: 600px) {
        .recettes-container {
            padding: 30px;
        }
    }

    @media (min-width: 900px) {
        .recettes-container {
            padding: 40px;
        }
    }
</style>

<?php
// Récupération du CPT recettes
$args = array(
    'post_type' => 'recettes',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'orderby' => 'date',
    'order' => 'ASC'
);

echo '<div class="recettes-container">';
echo '<h1>Nos Recettes</h1>';
$recettes = new WP_Query($args);

if ($recettes->have_posts()) {
    echo '<div class="recettes-grid">';
    while ($recettes->have_posts()) {
        $recettes->the_post();

        // Récupérer les champs ACF
        $image_url = get_field('illustration_recette');
        $temps_de_cuisson = get_field('temps_de_cuisson');

        if (filter_var($image_url, FILTER_VALIDATE_URL)) {
            $image_url = esc_url($image_url);
            $image_alt = get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', true);
        } else {
            $image_url = '';
            $image_alt = 'Image non disponible';
        }
?>
        <div class="recette-card">
            <a href="<?php the_permalink(); ?>">
                <?php if (!empty($image_url)) : ?>
                    <img src="<?php echo $image_url; ?>" alt="<?php echo esc_attr($image_alt); ?>" />
                <?php endif; ?>
                <div class="recette-title"><?php the_title(); ?></div>
                <div class="recette-details">
                    <p><strong>Temps de cuisson:</strong> <?php echo esc_html($temps_de_cuisson); ?></p>
                </div>
            </a>
        </div>
<?php
    }
    echo '</div>';
} else {
    echo '<p>Aucune recette trouvée.</p>';
}
echo '</div>';

get_footer();
?>