import prisma from "../helpers/prisma-client";

export async function createProduct(data) {
  const product = await prisma.product.create({
    data: data,
  });
  return product;
}

export async function getManyProducts(query) {
  const products = await prisma.product.findMany();
  return products;
}

export async function getOneProduct(id) {
  const product = await prisma.product.findFirst({ where: { id } });
  return product;
}

export async function updateProduct(id, data) {
  const product = await prisma.product.update({
    where: { id },
    data: data,
  });
  return product;
}

export async function deleteProduct(id) {
  const product = await prisma.product.delete({ where: { id } });
  return product;
}
