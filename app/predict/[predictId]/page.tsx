'use client';

import Image from 'next/image';
import Chart from '../../chart';
import adivisorPontaImg from '../../../public/img/advisors/ponta.jpg';
import {
  Card,
  Metric,
  Text,
  Title,
  Flex,
  CategoryBar,
  Button
} from '@tremor/react';

export default function PredictPage() {
  const item = {
    title: 'まいにち投稿20日続ける',
    amount: 10234,
    data: [10, 10]
  };

  const calcurateWinOdds = (amount: number, loseVote: number) => {
    return Math.floor(amount / loseVote) / 100;
  };
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <div className="text-center my-4">
            <h3 className="font-bold text-2xl mb-1">覚悟人</h3>
            <div className="flex-shrink-0 overflow-hidden rounded-full w-48 h-48 mx-auto">
              <Image
                src={adivisorPontaImg}
                width="360"
                height="360"
                alt="Avatar"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="py-2">
              <h3 className="font-bold text-2xl mb-1">ponta</h3>
              <div className="inline-flex text-gray-700 items-center">
                Pontech CEO
              </div>
            </div>
          </div>
          <div className="flex justify-center px-2">
            <div className="flex">
              <button
                type="button"
                className="mx-1 text-white bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mb-2"
              >
                Twitter
              </button>
            </div>
          </div>
        </Card>
        <Card>
          <Title>{item.title}</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-2"
          >
            <Text>覚悟金額: </Text>
            <Metric>{item.amount.toLocaleString()}</Metric>
            <Text>円</Text>
          </Flex>
          <Text className="mt-3">達成基準: ブログ記事を毎日1記事以上書く</Text>
          <Text className="mt-3">
            確認方法: https://pontech.dev/dapps-everyday
          </Text>
          <CategoryBar
            values={[...item.data, 100 - (item.data[0] + item.data[1])]}
            colors={['red', 'emerald', 'gray']}
            markerValue={item.data[0]}
            className="mt-3"
          />
          <Button className="mt-3" color="red">
            ダウト × {calcurateWinOdds(item.amount, item.data[0])}
          </Button>
          <Button className="mt-3 ml-2" color="green">
            応援する
          </Button>
        </Card>
      </div>
      <Chart />
    </main>
  );
}
