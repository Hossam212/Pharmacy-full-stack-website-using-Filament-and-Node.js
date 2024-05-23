<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrdersResource\Pages;
use App\Filament\Resources\OrdersResource\RelationManagers;
use App\Models\Orders;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\NumberInput;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Checkbox;
use Filament\Tables\Columns;
class OrdersResource extends Resource
{
    protected static ?string $model = Orders::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
               TextInput::make('product')
                   ->label('Product Name')
                   ->required(),

               TextInput::make('user')
                   ->label('User Name')
                   ->required(),

                   TextInput::make('price')
                   ->label('Price')
                   ->numeric()
                   ->required()
                   ->minValue(0),

               DateTimePicker::make('createdAt')
                   ->label('Created At')
                   ->default(now())
                   ->required(),

               Checkbox::make('paid')
                   ->label('Paid')
                   ->default(true),
           ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                    Columns\TextColumn::make('product')
                    ->label('Product Name')
                    ->searchable(),
                    Columns\TextColumn::make('user')
                    ->label('User Name')
                    ->searchable(),
                    Columns\TextColumn::make('price')
                    ->label('Price')
                    ->numeric()
                    ->sortable(),
                    Columns\TextColumn::make('purchased at')
                    ->label('Created At')
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrders::route('/create'),
            'edit' => Pages\EditOrders::route('/{record}/edit'),
        ];
    }
}
