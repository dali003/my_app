import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PostService {
  async create(data){
    const resp =  await prisma.post.create(
      {
      data:data,
      select:{
        id: true,
        title: true,
        content: true,
        published: true,
        authorId: true

      }
    })
    return {
      id: resp.id,
      title: resp.title,
      content: resp.content,
      published: resp.published,
      authorId: resp.authorId
    }
}


  async findAll() {
    const resp = await prisma.post.findMany();
    return resp;
  }

  findOne(id: any) {
    console.log(typeof id)
    const response =  prisma.post.findUnique(
      {
        where: {
          id: parseInt(id)
        },
        select : {
          id: true,
          title: true,
          content: true,
          published: true,
          authorId: true,
          author: true
        }
      }
    );
    return response;
  }

  update(id: any, data: any) {
    return prisma.post.update(
      {
        where: {
          id: parseInt(id)
        },
        data: data
      }
    );
  }

   async deletePost(id: number): Promise<void> {
    const post = prisma.post.findUnique({ where: { id } });
   prisma.post.delete({ where: { id } });
  }
}
