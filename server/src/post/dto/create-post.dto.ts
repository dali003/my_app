import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsBoolean} from "class-validator";

export class CreatePostDto {
  //    @IsNumber({}, { message: "Invalid ID. Must be a number." }) @ApiProperty({})
  id: number;
  @IsString({ message: 'Invalid title. Must be a string.' })
  @ApiProperty({
    required: true,
    type: 'string',
    name: 'title',
    description: 'title of post',
  })
  title: string;
  @IsString({ message: 'Invalid content. Must be a string.' })
  @ApiProperty({
    required: true,
    type: 'string',
    name: 'content',
    description: 'content of post',
  })
  content: string;
  @IsBoolean({ message: 'Invalid published. Must be a true/false.' })
  @ApiProperty({
    required: true,
    type: 'boolean',
    name: 'published',
    description: 'published of post',
  })
  published: boolean;
  @IsNumber({}, { message: 'Invalid authorId . Must be a number.' })
  @ApiProperty({
    required: true,
    type: 'number',
    name: 'authorId',
    description: 'authorId of the post',
  })
  authorId: number;
}
