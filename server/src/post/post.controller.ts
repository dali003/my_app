import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import * as swagger from "@nestjs/swagger";
import * as common from "@nestjs/common";


@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post("create")
  @common.UsePipes(new common.ValidationPipe({ transform: true }))
  @swagger.ApiBody({type:CreatePostDto})
  @swagger.ApiCreatedResponse({type:CreatePostDto})
  create(@Body() data : CreatePostDto): any{
    try {
      const resp =  this.postService.create(data);
      return resp;
    } catch (error) {
      throw new common.NotFoundException;
    }
}


  @Get("findAllPosts")
  findAll() {
    console.log("api")
    return this.postService.findAll();
  }
 

  @Get('/find/:id')
  findOne(@Param('id') id: Number) {
    console.log(typeof id);
    return this.postService.findOne(id);
  }
   
  @swagger.ApiCreatedResponse({type:UpdatePostDto})
  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }
  @Delete('delete/:id')
  deletePost(@Param('id') id: number) {
    return this.postService.deletePost(id);
  }
  }