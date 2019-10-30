<?php
namespace App\Traits;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

trait PaginatesResponsesTrait
{
    /**
     * Create an HTTP response that represents the object with pagination.
     *
     * @param Request $request
     * @return Collection
     */
    public function toPaginatedResponse($request)
    {
        // Add pagination to the query builder.
        $this->buildPagination($request);
        // Respond with the transformed paginated date.
        return $this->builder;
    }
    /**
     * Check if the request has a pagination value.
     *
     * @param  Request  $request
     * @return bool
     */
    protected function hasPagination($request)
    {
        return $request->has('paginate');
    }

    /**
     * Add paginate to the eloquent query builder.
     *
     * @param Request $request
     * @return void
     */
    protected function buildPagination($request)
    {
        $this->builder = $this->builder->paginate($this->getPagination($request));
    }
    /**
     * Get the paginate value.
     *
     * @param  Request $request
     * @return int
     */
    protected function getPagination($request)
    {
        return $request->input('paginate');
    }
}
