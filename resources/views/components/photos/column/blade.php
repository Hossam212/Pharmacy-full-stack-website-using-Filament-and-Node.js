@php
    $photos = $getState();
    $photoUrls = [];
    if (is_array($photos) && !empty($photos)) {
        $photoUrls = array_slice($photos, 0, 3); // Get up to 3 photos
    }
@endphp

<div class="photo-gallery">
    @if (!empty($photoUrls))
        @foreach ($photoUrls as $photo)
            <img src="{{ asset('storage/' . $photo['image']) }}" alt="Product Photo" class="photo-thumbnail">
        @endforeach
    @else
        <span>No Photos</span>
    @endif
</div>

<style>
.photo-gallery {
    display: flex;
    gap: 10px; /* Space between photos */
}

.photo-thumbnail {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 1px solid #ddd; /* Add a border to the photos */
    border-radius: 5px; /* Add some rounding to the corners */
}
</style>
