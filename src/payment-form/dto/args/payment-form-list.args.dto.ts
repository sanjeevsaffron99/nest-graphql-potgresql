import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaymentFormListArgsDto {
  @Field(() => String, { nullable: true }) textFilter?: string;
  @Field(() => Int, { nullable: false }) paging: number;
  @Field(() => Int, { nullable: false }) page: number;
}