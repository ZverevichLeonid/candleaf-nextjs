"use server"
import { redirect } from "next/navigation"
import { db } from "@/services/db"
import { revalidatePath } from "next/cache"

export async function createProduct(formData: FormData) {
  const productCollectionId = formData.get("productCollectionId")
  const productImage = formData.get("productImage")
  const productName = formData.get("productName")
  const productWax = formData.get("productWax")
  const productFragnance = formData.get("productFragnance")
  const productPrice = formData.get("productPrice")
  const productBurningTimeMin = formData.get("productBurningTimeMin")
  const productBurningTimeMax = formData.get("productBurningTimeMax")
  const productHeight = formData.get("productHeight")
  const productWidth = formData.get("productWidth")
  const productWeight = formData.get("productWeight")
  try {
    await db.candle.create({
      data: {
        name: String(productName),
        collectionId: Number(productCollectionId),
        image: String(productImage),
        price: Number(productPrice),
        wax: String(productWax),
        fragrance: String(productFragnance),
        burningTimeMin: Number(productBurningTimeMin),
        burningTimeMax: Number(productBurningTimeMax),
        weight: Number(productWeight),
        height: Number(productHeight),
        width: Number(productWidth),
      },
    })
  } catch (error) {
    console.log(error)
    await db.$disconnect()
    throw new Error("Error connecting to database")
  }

  revalidatePath("/dashboard/products")
  redirect("/dashboard/products")
}

export async function createCollection(formData: FormData) {
  const collectionName = formData.get("collectionName")
  const collectionDiscount = formData.get("collectionDiscount")
  const collectionDiscountValue = formData.get("collectionDiscountValue")
  try {
    await db.collection.create({
      data: {
        name: String(collectionName),
        discount: collectionDiscount === "on" ? true : false,
        discountValue: Number(collectionDiscountValue),
      },
    })
  } catch (error) {
    console.log(error)
    await db.$disconnect()
    throw new Error("Error connecting to database")
  }
  revalidatePath("/dashboard/collections")
  redirect("/dashboard/collections")
}

export async function deleteCollection(id: string) {
  try {
    await db.collection.delete({
      where: {
        id: Number(id),
      },
    })
  } catch (error) {
    console.log(error)
    await db.$disconnect()
    throw new Error("Error connecting to database")
  }
  revalidatePath("/dashboard/collections")
  redirect("/dashboard/collections")
}

export async function editCollection(id: string, formData: FormData) {
  const collectionName = formData.get("collectionName")
  const collectionDiscount = formData.get("collectionDiscount")
  const collectionDiscountValue = formData.get("collectionDiscountValue")

  try {
    await db.collection.update({
      where: {
        id: Number(id),
      },
      data: {
        id: Number(id),
        name: String(collectionName),
        discount: collectionDiscount === "on" ? true : false,
        discountValue: Number(collectionDiscountValue),
      },
    })
  } catch (error) {
    console.log(error)
    await db.$disconnect()
    throw new Error("Error connecting to database")
  }
  revalidatePath("/dashboard/collections")
  redirect("/dashboard/collections")
}

export async function deleteProduct(id: string) {
  try {
    await db.candle.delete({
      where: {
        id: Number(id),
      },
    })
  } catch (error) {
    console.log(error)
    await db.$disconnect()
    throw new Error("Error connecting to database")
  }
  revalidatePath("/dashboard/products")
  redirect("/dashboard/products")
}

export async function editProduct(id: string, formData: FormData) {
  const productImage = formData.get("productImage")
  const productName = formData.get("productName")
  const productWax = formData.get("productWax")
  const productFragnance = formData.get("productFragnance")
  const productPrice = formData.get("productPrice")
  const productBurningTimeMin = formData.get("productBurningTimeMin")
  const productBurningTimeMax = formData.get("productBurningTimeMax")
  const productHeight = formData.get("productHeight")
  const productWidth = formData.get("productWidth")
  const productWeight = formData.get("productWeight")
  try {
    if (productImage) {
      await db.candle.update({
        where: {
          id: Number(id),
        },
        data: {
          id: Number(id),
          name: String(productName),
          image: String(productImage),
          price: Number(productPrice),
          wax: String(productWax),
          fragrance: String(productFragnance),
          burningTimeMin: Number(productBurningTimeMin),
          burningTimeMax: Number(productBurningTimeMax),
          weight: Number(productWeight),
          height: Number(productHeight),
          width: Number(productWidth),
        },
      })
    } else {
      await db.candle.update({
        where: {
          id: Number(id),
        },
        data: {
          id: Number(id),
          name: String(productName),
          price: Number(productPrice),
          wax: String(productWax),
          fragrance: String(productFragnance),
          burningTimeMin: Number(productBurningTimeMin),
          burningTimeMax: Number(productBurningTimeMax),
          weight: Number(productWeight),
          height: Number(productHeight),
          width: Number(productWidth),
        },
      })
    }
  } catch (error) {
    console.log(error)
    await db.$disconnect()
    throw new Error("Error connecting to database")
  }
  revalidatePath("/dashboard/products")
  redirect("/dashboard/products")
}
export async function editUserRole(id: string, formData: FormData) {
  const userRole = formData.get("userRole")
  try {
    await db.user.update({
      where: {
        id: id,
      },
      data: {
        role: String(userRole),
      },
    })
  } catch (error) {
    console.log(error)
    await db.$disconnect()
    throw new Error("Error connecting to database")
  }
  revalidatePath("/dashboard/users")
  redirect("/dashboard/users")
}

export async function createOrder(
  userEmail: string,
  formData: FormData,
  productsWithQuantity: any,
  paymentMethod: "online" | "upon-receipt",
  totalPrice: number
) {
  const userTel = formData.get("userTel")
  const additionalUserEmail = formData.get("userEmail")
  try {
    const existingCustomer = await db.user.findUnique({
      where: {
        email: userEmail,
      },
    })

    const productsInfo = await Promise.all(
      productsWithQuantity.map(
        async ({ id, quantity }: { id: number; quantity: number }) => {
          const product = await db.candle.findUnique({
            where: {
              id: id,
            },
          })
          return { product, quantity }
        }
      )
    )
    if (existingCustomer) {
      await db.order.create({
        data: {
          status: "In progress",
          paymentMethod: paymentMethod,
          telNumber: String(userTel),
          userEmail: existingCustomer.email!!,
          totalPrice: totalPrice.toString(),
          user: {
            connect: {
              email: userEmail,
            },
          },
          products: {
            connect: productsInfo.map(({ product }) => ({ id: product.id })),
          },
          items: {
            create: productsInfo.map(({ product, quantity }) => ({
              quantity,
              productId: product.id,
            })),
          },
        },
      })
    } else {
      await db.order.create({
        data: {
          status: "In progress",
          paymentMethod: paymentMethod,
          telNumber: String(userTel),
          userEmail:
            String(additionalUserEmail).length > 0
              ? String(additionalUserEmail)
              : "",
          totalPrice: totalPrice.toString(),
          userId: null,
          items: {
            create: productsInfo.map(({ product, quantity }) => ({
              quantity,
              product: {
                connect: { id: product.id },
              },
            })),
          },
        },
      })
    }
  } catch (error) {
    console.log(error)
    await db.$disconnect()
    throw new Error("Error connecting to database")
  }
  revalidatePath("/cart")
  revalidatePath("/thanks")
  redirect("/thanks")
}

export async function fetchOrdersDataByUser(email: string) {
  try {
    let user = await db.user.findUnique({
      where: {
        email: email,
      },
    })
    if (user) {
      let orders = await db.order.findMany({
        where: {
          OR: [
            {
              userId: user.id,
            },
            {
              userEmail: user.email!!,
            },
          ],
        },
        include: {
          items: true,
          products: true,
        },
      })
      let collections = await db.collection.findMany()
      return [orders, collections]
    }
    return null
  } catch (error) {
    console.log(error)
    await db.$disconnect()
    throw new Error("Error connecting to database")
  }
}
