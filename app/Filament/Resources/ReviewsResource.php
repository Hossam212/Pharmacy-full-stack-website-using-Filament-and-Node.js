<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReviewsResource\Pages;
use App\Filament\Resources\ReviewsResource\RelationManagers;
use App\Models\Reviews;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\NumberInput;
use Filament\Forms\Components\DateTimePicker;
use Filament\Tables\Columns;
class ReviewsResource extends Resource
{
    protected static ?string $model = Reviews::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
               Textarea::make('review')
                   ->label('Review')
                   ->required(),

                TextInput::make('rating')
                   ->label('Rating')
                   ->numeric()
                   ->required()
                   ->minValue(1)
                   ->maxValue(5),

               DateTimePicker::make('createdAt')
                   ->label('Created At')
                   ->default(now())
                   ->required(),

               TextInput::make('product')
                   ->label('Product Name')
                   ->required(),

               TextInput::make('user')
                   ->label('User Name')
                   ->required(),
           ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Columns\TextColumn::make('review')
                ->label('Review')
                ->searchable(),
                Columns\TextColumn::make('rating')
                ->label('Rating')
                ->numeric()
                ->sortable(),
                Columns\TextColumn::make('user')
                ->label('User Name')
                ->searchable(),
                Columns\TextColumn::make('product')
                ->label('Product Name')
                ->searchable(),
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
            'index' => Pages\ListReviews::route('/'),
            'create' => Pages\CreateReviews::route('/create'),
            'edit' => Pages\EditReviews::route('/{record}/edit'),
        ];
    }
}
