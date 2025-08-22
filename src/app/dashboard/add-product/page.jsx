import AddProductForm from './components/AddProductForm';

export default function AddProductPage() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Add New Product
            </h1>
            <p className="text-muted-foreground">
              Fill in the details below to add a new product to your catalog.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="max-w-2xl mx-auto">
          <AddProductForm />
        </div>
      </div>
    </div>
  );
}