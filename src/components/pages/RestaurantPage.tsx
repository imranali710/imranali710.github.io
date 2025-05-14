function RestaurantPage() {
  const handleRedirect = () => {
    window.open("https://imranali710.github.io/RestaurantShowcase/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <section className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Go to Demo Website
          </h1>
          <button
            onClick={handleRedirect}
            className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit Now
          </button>
        </section>
      </div>
    </div>
  );
}

export default RestaurantPage;
