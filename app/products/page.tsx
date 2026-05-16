'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

import { products } from '@/lib/products'

export default function ProductsPage() {
  const [category, setCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === 'all' ||
      product.category.some(
        (cat) => cat.toLowerCase() === category.toLowerCase()
      )
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-36 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="font-bold tracking-tight text-4xl md:text-5xl">
                  Products
                </h1>
                <p className="mx-auto max-w-[250px] text-gray-500 leading-tight">
                  Browse our carefully designed tools to enhance your daily
                  life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="w-full sm:w-auto">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="planners">Planners</SelectItem>
                    <SelectItem value="calendars">Calendars</SelectItem>
                    <SelectItem value="templates">Templates</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-auto">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full sm:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group"
                  >
                    <Card className="overflow-hidden transition-all duration-200">
                      <div className="aspect-video relative">
                        <Image
                          src={product.mainImage || '/placeholder.svg'}
                          alt={product.name}
                          fill
                          priority={true}
                          unoptimized={true}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="flex flex-col justify-between p-4">
                        <div>
                          {product.category.map((category, index) => (
                            <div
                              key={index}
                              className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600 mb-2 mr-1"
                            >
                              {category}
                            </div>
                          ))}
                          <h3 className="font-semibold text-base">
                            {product.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {product.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-right mt-4">
                          <p className="text-blue-600">${product.price}</p>
                          <p className="line-through text-gray-500 mb-1 mx-2">
                            ${product.price + 3}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium">No products found</h3>
                <p className="text-gray-500 mt-2">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
