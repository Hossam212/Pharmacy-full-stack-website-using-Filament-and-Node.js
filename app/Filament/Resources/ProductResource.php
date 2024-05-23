<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns;
use Filament\Tables\Actions;
use Filament\Tables\Data;
use Filament\Tables\Columns\ImageColumn;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            TextInput::make('name')
                ->label('Name')
                ->required()
                ->maxLength(255)
                ->extraInputAttributes(['style' => 'text-transform: capitalize;']), // Optional: for capitalization

            Textarea::make('description')
                ->label('Description')
                ->required(),

            TextInput::make('price')
              ->numeric()
              ->minValue(0),
            Select::make('Category')
            ->options([
                'skin care' => 'Skin Care',
                'hair' => 'Hair',
                'diabetic patients' => 'Diabetic Patients',
                'heart patients' => 'Heart Patients',
                'hypertensive patients' => 'Hypertensive patients',
                'normal' => 'Normal',
            ])
            ->searchable()
            ->native(false),

            TextInput::make('manufacturer')
                ->label('Manufacturer')
                ->required()
                ->maxLength(255),

            FileUpload::make('image')
                ->label('Image')
                ->image()
                ->directory('images/products')
                ->visibility('public'), // Ensure appropriate file permissions

            TextInput::make('quantity')
            ->numeric()
            ->required()
            ->minValue(0),
        ]);
    }

    public static function table(Table $table): Table
    {
       return $table
       ->columns([
           Columns\TextColumn::make('name')
               ->label('Name')
               ->searchable()
               ->sortable(),

           Columns\TextColumn::make('description')
               ->label('Description')
               ->searchable(),

           Columns\TextColumn::make('price')
               ->label('Price')
               ->numeric()
               ->sortable(),

           Columns\TextColumn::make('manufacturer')
               ->label('Manufacturer')
               ->searchable(),

           Columns\TextColumn::make('quantity')
               ->label('Quantity')
               ->numeric()
               ->sortable(),

       ])
       ->filters([
           //
       ])
       ->actions([
           Actions\EditAction::make(),
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
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
