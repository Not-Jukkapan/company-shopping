import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { mockProducts } from "@/data/mockProducts";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { id } = useParams({ from: '/product/$id' });
  const { addItem } = useCartStore();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const foundProduct = mockProducts.find(p => p.id === Number(id));
      if (!foundProduct) {
        throw new Error('Product not found');
      }
      return foundProduct;
    },
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-20 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // For demo purposes, create multiple images
  const productImages = [
    product.image,
    product.image, // In real app, these would be different images
    product.image,
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <Carousel className="w-full">
                  <CarouselContent>
                    {productImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={image}
                          alt={`${product.name} - View ${index + 1}`}
                          className="w-full aspect-square object-cover rounded-lg"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-auto"
              />
            </DialogContent>
          </Dialog>

          <Tabs defaultValue="0" className="w-full" onValueChange={(value) => setSelectedImage(parseInt(value))}>
            <TabsList className="grid grid-cols-3 h-20">
              {productImages.map((image, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="p-0 data-[state=active]:border-2 data-[state=active]:border-primary"
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <Button 
            onClick={() => {
              addItem(product);
              toast({
                title: "Success",
                description: "Product added to cart",
              });
            }}
            className="w-full md:w-auto"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;