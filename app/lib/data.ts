import { db } from "@/services/db"

const ITEMS_PER_PAGE = 6

export async function fetchProductsData(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  try {
    const candles = await db.candle.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      orderBy: {
        id: "asc",
      },
      include: {
        collection: true,
      },
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            wax: {
              contains: query,
            },
          },
          {
            fragrance: {
              contains: query,
            },
          },
        ],
      },
    })
    db.$disconnect()
    return candles
  } catch (error) {
    console.error("Database Error:", error)
    db.$disconnect()
    throw new Error("Failed to fetch candles.")
  }
}

export async function fetchProductsPages(query: string) {
  try {
    const count = await db.candle.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            wax: {
              contains: query,
            },
          },
          {
            fragrance: {
              contains: query,
            },
          },
        ],
      },
    })

    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch total number of invoices.")
  }
}

export async function fetchUsersPages(query: string) {
  try {
    const count = await db.user.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            email: {
              contains: query,
            },
          },
          {
            role: {
              contains: query,
            },
          },
        ],
      },
    })

    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch total number of invoices.")
  }
}
export async function fetchProductsHomePage() {
  try {
    const candles = await db.candle.findMany({
      where: {
        collectionId: 1,
      },
      select: {
        id: true,
        name: true,
        image: true,
        price: true,
        collection: {
          select: {
            discount: true,
            discountValue: true,
          },
        },
      },
    })
    db.$disconnect()
    return candles
  } catch (error) {
    console.error("Database Error:", error)
    db.$disconnect()
    throw new Error("Failed to fetch candles.")
  }
}

export async function fetchProduct(id: string) {
  try {
    const candle = await db.candle.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        collection: true,
        burningTimeMax: true,
        burningTimeMin: true,
        collectionId: true,
        fragrance: true,
        height: true,
        id: true,
        image: true,
        name: true,
        price: true,
        wax: true,
        weight: true,
        width: true,
      },
    })
    db.$disconnect()
    return candle
  } catch (error) {
    console.error("Database Error:", error)
    db.$disconnect()
    throw new Error("Failed to fetch candles.")
  }
}

export async function fetchWishlistProudcts(wishlistArray: number[]) {
  try {
    const candle = await db.candle.findMany({
      where: {
        id: {
          in: wishlistArray,
        },
      },
    })
    db.$disconnect()
    return candle
  } catch (error) {
    console.error("Database Error:", error)
    db.$disconnect()
    throw new Error("Failed to fetch candles.")
  }
}

export async function fetchCollectionsData() {
  try {
    const collections = await db.collection.findMany({
      select: {
        id: true,
        name: true,
        discount: true,
        discountValue: true,
        products: true,
      },
      orderBy: {
        id: "asc",
      },
    })
    db.$disconnect()
    return collections
  } catch (error) {
    console.error("Database Error:", error)
    db.$disconnect()
    throw new Error("Failed to fetch collections.")
  }
}

export async function fetchProductsDataByCollections() {
  try {
    const collectionsWithProducts = await db.collection.findMany({
      select: {
        id: true,
        name: true,
        products: {
          select: {
            id: true,
            name: true,
            image: true,
            price: true,
            collection: {
              select: {
                discount: true,
                discountValue: true,
              },
            },
          },
        },
      },
    })
    return collectionsWithProducts
  } catch (error) {
    console.error("Database Error:", error)
    db.$disconnect()
    throw new Error("Failed to fetch collections.")
  }
}

export async function fetchCollectionWithProducts(id: string) {
  try {
    const collectionWithProducts = await db.collection.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        name: true,
        products: {
          select: {
            id: true,
            name: true,
            image: true,
            price: true,
            collection: {
              select: {
                discount: true,
                discountValue: true,
              },
            },
          },
        },
      },
    })
    return collectionWithProducts
  } catch (error) {
    console.error("Database Error:", error)
    db.$disconnect()
    throw new Error("Failed to fetch collections.")
  }
}

export async function fetchUsers(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  try {
    const users = await db.user.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      orderBy: {
        name: "asc",
      },
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            email: {
              contains: query,
            },
          },
          {
            role: {
              contains: query,
            },
          },
        ],
      },
    })
    return users
  } catch (error) {
    console.error("Database Error:", error)
    db.$disconnect()
    throw new Error("Failed to fetch users.")
  }
}

export async function fetchUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    })
    db.$disconnect()
    return user
  } catch (error) {
    console.error("Database Error:", error)
    db.$disconnect()
    throw new Error("Failed to fetch user.")
  }
}

export async function fetchCollectionDataById(id: string) {
  try {
    const collection = await db.collection.findUnique({
      where: {
        id: Number(id),
      },
    })
    return collection
  } catch (error) {
    console.error("Database Error:", error)
    db.$disconnect()
    throw new Error("Failed to fetch collection by id.")
  }
}

// export async function fetchOrdersDataByUser(email: string, formData: FormData) {
//   try {
//     let user = await db.user.findUnique({
//       where: {
//         email: email,
//       },
//     })
//     if (user) {
//       let orders = await db.order.findFirst({
//         where: {
//           userId: user.id,
//         },
//       })
//       return orders
//     }
//     return "daun data"
//   } catch (error) {
//     return console.log(error)
//   }
// }

//  try {
//     const collections = await db.collection.findMany({
//       include: {
//         products: true,
//       },
//     })
//     const products = await db.candle.findMany({
//       select: {
//         id: true,
//         name: true,
//         image: true,
//         price: true,
//         collectionId: true,
//       },
//     })
//     console.log(collections, "collections")
//     const collectionsWithProducts: collectionsWithProducts[] = []
//     collections.map((collection) => {
//       collectionsWithProducts.push({
//         collectionName: collection.name,
//         collectionId: collection.id,
//         productsInCollection: products.filter(
//           (product) => product.collectionId === collection.id
//         ),
//       })
//     })
//     return collectionsWithProducts
//   } catch (error) {
//     console.error("Database Error:", error)
//     db.$disconnect()
//     throw new Error("Failed to fetch collections.")
//   }
